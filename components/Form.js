const FormDem = () => {
  return (
    <div className="border-2 border-red-900 w-full h-96 flex flex-col justify-evenly bg-green-600 p-2">
      <div className="border-2 border-red-900 w-full h-40 overflow-hidden">
        <h4 className="flex flex-col uppercase text-green-100">Voulez vous </h4>
        <h4 className=" flex flex-col uppercase ">être recontacté ?</h4>
        <h4 className="flex flex-col  uppercase text-green-100">
          Envoyé nous vos informations.
        </h4>
      </div>
      <form className="flex flex-col w-full">
        <label htmlFor="">Nom</label>
        <input className=" h-3.5" type="text" />
        <label htmlFor="">Prénom</label>
        <input className=" h-3.5" type="text" />
        <label htmlFor="">Adresse</label>
        <input className="h-3.5" type="text" />
        <label htmlFor="">Ville</label>
        <input className="h-3.5" type="text" />
        <label htmlFor="">Message</label>
        <textarea
          className="h-1.6"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Envoie</button>
        
      </form>
    </div>

    // <div className="border h-96 flex justify-evenly bg-green-600 p-5">
    //   <div className="flex flex-col ">
    //     <h4 className=" text-6xl uppercase text-green-100">Voulez vous </h4>
    //     <h4 className=" text-6xl uppercase ">être recontacté ?</h4>
    //     <h4 className=" text-6xl uppercase text-green-100">
    //       Envoyé nous vos informations.
    //     </h4>
    //   </div>
    //   <form className="flex flex-col w-2/5">
    //     <label htmlFor="">Nom</label>
    //     <input className=" h-1/6" type="text" />
    //     <label htmlFor="">Prénom</label>
    //     <input className=" h-1/6" type="text" />
    //     <label htmlFor="">Adresse</label>
    //     <input className=" h-1/6" type="text" />
    //     <label htmlFor="">Ville</label>
    //     <input className=" h-1/6" type="text" />
    //     <label htmlFor="">Message</label>
    //     <textarea name="" id="" cols="30" rows="10"></textarea>
    //     <button type="submit">Envoie</button>
    //   </form>
    // </div>
  );
};

export default FormDem;
