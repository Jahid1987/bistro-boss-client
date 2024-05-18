import Card from "../Card";

const TabContents = ({ items }) => {
  return (
    <div className="grid gap-2 md:gap-5 lg:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-1 md:p-2">
      {items.map((salad) => (
        <Card key={salad._id} menu={salad}></Card>
      ))}
    </div>
  );
};

export default TabContents;
