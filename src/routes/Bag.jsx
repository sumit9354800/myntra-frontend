import { useSelector } from "react-redux";
import BagItem from "../component/BagItem";

function Bag() {

  const bagItems = useSelector((state) => state.bag)
  const items = useSelector((state) => state.cartSlice)
  const finalItems = items.filter(item => {
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >= 0
  })

  let CONVENIENCE_FEE = 99;
  let totalItem = bagItems.length;
  let totalMRP = 0
  let totalDiscount = 0;

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  })

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;


  return (<>
    <div className="w-full flex flex-wrap justify-center items-center">
      <div className="w-[90%] flex flex-wrap justify-evenly my-5">
        <div className="w-12/12 md:w-7/12 p-5">
          {finalItems.map((item) => (
            <BagItem key={item.id} items={item} />
          ))}
        </div>
        <div className="w-4/12 max-md:w-12/12 p-5 border-s border-gray-300 ">
          <div className="p-2">
            <p className="font-semibold text-gray-600 mb-3">PRICE DETAILS ({totalItem} Items)</p>
            <div className="flex justify-between border-b border-gray-300 pb-6">
              <div className="w-6/12 flex flex-col items-start gap-3">
                <p className="text-gray-600">Total MRP</p>
                <p className="text-gray-600">Discount on MRP</p>
                <p className="text-gray-600">Convenience Fee</p>
              </div>
              <div className="w-6/12 flex flex-col items-end gap-3">
                <p className="text-gray-600">₹{totalMRP}</p>
                <p className="text-green-500">-₹{totalDiscount}</p>
                <p className="text-gray-600">₹{CONVENIENCE_FEE}</p>
              </div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="w-6/12 flex flex-col items-start gap-3">
                <p className="font-semibold">Total Amount</p>
              </div>
              <div className="w-6/12 flex flex-col items-end gap-3">
                <p className="font-semibold">₹{finalPayment}</p>
              </div>
            </div>
            <button className="w-full my-5 py-2 text-xl bg-pink-600 text-white cursor-pointer">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  </>)

}

export default Bag;
