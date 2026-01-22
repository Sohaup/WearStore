export const hocLoader = (Component:React.ComponentType) => (props:any) => {
    if (props.isLoading) {
        return "...laoding";
    } 
    if (props.isError) {
        return "an error is oqured";
    }   
    return <Component {...props}/>
}