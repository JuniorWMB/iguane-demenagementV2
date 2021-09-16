import Image from "next/image";

const ItemsBlock = ({ title, Icon, texte }) => {
  return (
    <div className="w-9/12 h-4/5 box-content overflow-hidden bg-green-200 ml-2 rounded">
      <div className="flex flex-col justify-evenly w-full h-full">
        <div className="text-4xl text-white w-full flex flex-col items-center">
          <Icon />
          <h2>{title}</h2>
        </div>
        <p className="text-center">{texte}</p>
      </div>
    </div>
  );
};

export default ItemsBlock;
