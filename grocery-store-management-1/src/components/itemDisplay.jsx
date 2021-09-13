export function Itemdisplay({props}){
    const {title,status} = props;
    var ot = []
    const fav = (props) =>{
       ot.push(props.title)
    }
    return (
      <div>
          {title}
          {/* { <button onClick={fav}>Add it to wishlist</button>} */}
      </div>
    )
}