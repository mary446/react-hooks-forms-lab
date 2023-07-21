import React, { useState } from "react";
import { v4 as uuid } from "uuid";
 //functionItemForm
//handleNameChange
//handleCategoryChange
//handleSubmit
function ItemForm(props) {
  //useState
  const[itemName ,setItemName] = useState("")
  const[itemCategory, setItemCategory]=useState("props")

  function handleNameChange(event){
    setItemName(event.target.value);
  }
  function handleCategoryChange(event){
    setItemCategory(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {id: uuid(), name: itemName, category: itemCategory};
    props.onItemFormSubmit(newItem);
    setItemName("")
    setItemCategory("Produce");
  }
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
