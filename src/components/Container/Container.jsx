export const Container = ({children}) => {
    return <div style={{outline: "solid red", width: "1200px", margin: "0 auto"}} class="container">
        {children}
    </div>
}