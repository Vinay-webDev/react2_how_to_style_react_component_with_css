/* creating inline styles */

function Button() {

   const styles = {
    backgroundColor: "cyan",
    color: "white",
    borderRadius: "5px",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
   }

    return(
        <button style={styles}>click me</button>
    );
}

export default Button




