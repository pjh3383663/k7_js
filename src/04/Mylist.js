import MyListData from "./MyListData.json";
import MyListItem from "./MyListItem";

export default function Mylist() {
    console.log(MyListData);
    const tags = MyListData.map(item => 
                                <img src = {item.imgUrl} />);
    
    
  return (
    <div>
      <MyListItem />
    </div>
  )
}