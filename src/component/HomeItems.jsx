import { useDispatch, useSelector } from "react-redux"
import { addToBag, removeFromBag } from "../store/bagSlice"

function HomeItems({ items }) {

  const bagItems = useSelector(state => state.bag)
  const bagIndex = bagItems.indexOf(items.id) >= 0;
  // console.log(bagIndex)

  const removeHandler = () => {
    dispatch(removeFromBag(items.id))
    // console.log(dispatch)
  }

  const dispatch = useDispatch()

  const addToBagHandler = () => {
    dispatch(addToBag(items.id))
    // console.log(dispatch)
  }

  return (<>
    <div className="w-6/12 md:w-4/12 lg:w-3/12 p-3 ">
      <img src={items.image} className="w-full" alt="product images" />
      <p>
        <span>{items.rating.stars} ⭐| {items.rating.count}</span>
      </p>
      <p className="font-bold text-md">{items.company}</p>
      <p className="text-ellipsis my-1 overflow-hidden whitespace-nowrap">{items.item_name}</p>
      <div className="flex gap-3 my-1 items-center">
        <span className="text-md my-1"><b>Rs. {items.current_price}</b></span>
        <span className="text-sm my-1 text-gray-500"><del>₹{items.original_price}</del></span>
        <span className="text-amber-500 my-1 text-sm">({items.discount_percentage}%OFF)</span>
      </div>
      <div className="flex gap-2">
        {bagIndex ?
          <button onClick={removeHandler} className="w-full text-red-600 hover:bg-red-600 hover:text-white py-2 border-2 border-otext-orange-600">Remove</button> :
          <button onClick={addToBagHandler} className="w-full text-green-600 hover:bg-green-600 hover:text-white py-2 border-2 border-otext-orange-600">Add To Bag</button>
        }
      </div>
    </div>
  </>)

}

export default HomeItems