import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemSearch, setItemSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(value) {
    setItemSearch(value);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && !itemSearch) {
      return true;
    } else if (selectedCategory === "All" && itemSearch) {
      return item.name.toLowerCase().includes(itemSearch.toLowerCase());
    } else if (itemSearch && item.category === selectedCategory) {
      return item.name.toLowerCase().includes(itemSearch.toLowerCase());
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
// import React, { useState } from "react";
// import { v4 as uuid } from "uuid";

// function ItemForm(props) {
//   const [itemName, setItemName] = useState("")
//   const [itemCategory, setItemCategory] = useState("Produce")

//   function handleNameChange(event) {
//     setItemName(event.target.value);
//   }

//   function handleCategoryChange(event) {
//     setItemCategory(event.target.value);
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     const newItem = {id: uuid(), name: itemName, category: itemCategory};
//     props.onItemFormSubmit(newItem);
//     setItemName("")
//     setItemCategory("Produce");
//   }

//   return (
//     <form className="NewItem" onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" name="name" value={itemName} onChange={handleNameChange}/>
//       </label>

//       <label>
//         Category:
//         <select name="category" value={itemCategory} onChange={handleCategoryChange}>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </label>

//       <button type="submit">Add to List</button>
//     </form>
//   );
// }

// export default ItemForm;
// // import React, { useState } from "react";
// // import ItemForm from "./ItemForm";
// // import Filter from "./Filter";
// // import Item from "./Item";

// // function ShoppingList({ items }) {
// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   function handleCategoryChange(event) {
// //     setSelectedCategory(event.target.value);
// //   }
// //   function handleSearchChange(value) {
// //     setItemSearch(value);
// //   }

// //   function handleItemFormSubmit(newItem) {
// //     setItems([...items, newItem]);
// //   }

// //   // const itemsToDisplay = items.filter((item) => {
// //   //   if (selectedCategory === "All") return true;

// //   //   return item.category === selectedCategory;
// //   // });

// //   // return (
// //   //   <div className="ShoppingList">
// //   //     <ItemForm />
// //   //     <Filter onCategoryChange={handleCategoryChange} />
// //   //     <ul className="Items">
// //   //       {itemsToDisplay.map((item) => (
// //   //         <Item key={item.id} name={item.name} category={item.category} />
// //   //       ))}
// //   //     </ul>
// //   //   </div>
// //   // );
// // // }

// // // export default ShoppingList;
// // const itemsToDisplay = items.filter((item) => {
// //   if (selectedCategory === "All" && !itemSearch) {
// //     return true;
// //   } else if (selectedCategory === "All" && itemSearch) {
// //     return item.name.toLowerCase().includes(itemSearch.toLowerCase());
// //   } else if (itemSearch && item.category === selectedCategory) {
// //     return item.name.toLowerCase().includes(itemSearch.toLowerCase());
// //   } else {
// //     return item.category === selectedCategory;
// //   }
// // });

// // return (
// //   <div className="ShoppingList">
// //     <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
// //     <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
// //     <ul className="Items">
// //       {itemsToDisplay.map((item) => (
// //         <Item key={item.id} name={item.name} category={item.category} />
// //       ))}
// //     </ul>
// //   </div>
// // );
// // }

// // export default ShoppingList;