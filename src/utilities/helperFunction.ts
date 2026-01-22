import { gsap } from "gsap";



// Define the config type
interface HorizontalLoopConfig {
    repeat?: number;
    paused?: boolean;
    speed?: number;
    snap?: number | false | ((value: number) => number); // remove `true`
    paddingRight?: number;
    reversed?: boolean;
}


// gsap loop helper function
export function horizontalLoop(
    items: HTMLElement[] | NodeListOf<HTMLElement> | NodeListOf<Element> | string,
    config: HorizontalLoopConfig = {}
): gsap.core.Timeline & {
    next: (vars?: gsap.TweenVars) => gsap.core.Tween;
    previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
    current: () => number;
    toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
    times: number[];
} {
    const elements: HTMLElement[] = gsap.utils.toArray(items) as HTMLElement[];
    const tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
            tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },

    });

    const length = elements.length;
    const startX = elements[0]?.offsetLeft;

    const times: number[] = [];
    const widths: number[] = [];
    const xPercents: number[] = [];
    let curIndex = 0;

    const pixelsPerSecond = (config.speed || 1) * 100;
    let snap: (value: number) => number;

    if (config.snap === false) {
        snap = (v) => v; // identity function, no snapping
    } else if (typeof config.snap === "function") {
        snap = config.snap;
    } else {
        // When config.snap is a number (or true), default to 1 or the value
        snap = gsap.utils.snap(typeof config.snap === "number" ? config.snap : 1);
    }


    let totalWidth: number;

    gsap.set(elements, {
        xPercent: (i, el) => {
            const width = (widths[i] = parseFloat(
                gsap.getProperty(el, "width", "px") as string
            ));
            xPercents[i] = snap(
                ((parseFloat(gsap.getProperty(el, "x", "px") as string) / width) * 100) +
                (gsap.getProperty(el, "xPercent") as number)
            );
            return xPercents[i];
        },
    });

    gsap.set(elements, { x: 0 });

    totalWidth =
        elements[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        elements[length - 1].offsetWidth *
        (gsap.getProperty(elements[length - 1], "scaleX") as number) +
        (config.paddingRight || 0);

    for (let i = 0; i < length; i++) {
        const item = elements[i];
        const curX = (xPercents[i] / 100) * widths[i];
        const distanceToStart = item.offsetLeft + curX - startX;
        const distanceToLoop =
            distanceToStart + widths[i] * (gsap.getProperty(item, "scaleX") as number);

        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        )
            .fromTo(
                item,
                {
                    xPercent: snap(
                        ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                    ),
                },
                {
                    xPercent: xPercents[i],
                    duration:
                        (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                    immediateRender: false,
                },
                distanceToLoop / pixelsPerSecond
            )
            .add("label" + i, distanceToStart / pixelsPerSecond);

        times[i] = distanceToStart / pixelsPerSecond;
    }

    function toIndex(index: number, vars: gsap.TweenVars = {}): gsap.core.Tween {
        if (Math.abs(index - curIndex) > length / 2) {
            index += index > curIndex ? -length : length; // shortest direction
        }

        const newIndex = gsap.utils.wrap(0, length, index);
        let time = times[newIndex];

        if ((time > tl.time()) !== (index > curIndex)) {
            vars.modifiers = {
                time: gsap.utils.wrap(0, tl.duration()),
            };
            time += tl.duration() * (index > curIndex ? 1 : -1);
        }

        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
    }

    // Attach navigation methods
    (tl as any).next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
    (tl as any).previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
    (tl as any).current = () => curIndex;
    (tl as any).toIndex = (index: number, vars?: gsap.TweenVars) =>
        toIndex(index, vars);
    (tl as any).times = times;

    tl.progress(1, true).progress(0, true); // pre-render

    if (config.reversed) {
        tl.vars.onReverseComplete?.();
        tl.reverse();
    }

    return tl as typeof tl & {
        next: (vars?: gsap.TweenVars) => gsap.core.Tween;
        previous: (vars?: gsap.TweenVars) => gsap.core.Tween;
        current: () => number;
        toIndex: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween;
        times: number[];
    };
}
