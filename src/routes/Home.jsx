import HomeItems from "../component/HomeItems";
import { useSelector } from "react-redux"

function Home() {

  const items = useSelector(data => data.cartSlice)

  return (<>
    <div className="flex justify-center w-full">
      <div className="w-[90%] flex flex-wrap my-10 justify-center">
        {items.map((item, index) => (
          <HomeItems key={index} items={item} />
        ))}
      </div>
    </div>
  </>)

}

export default Home;