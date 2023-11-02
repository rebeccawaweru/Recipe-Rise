import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../Services/api";
import { Chart } from 'react-google-charts';
import CustomLoader from "./CustomLoader";
function Reports() {
    const {id} = useParams()
    const [recipes,setRecipes] = useState([])
  // Calculate the total ingredient prices for each item
const itemsWithTotalPrice = recipes.map(item => ({
    name: item.name,
    budget: item.budget,
    totalPrice: item.ingredients.reduce((total, ingredient) => total + parseFloat(ingredient.price), 0),
  }));
    const chartData = [['Item Name', 'Budget', 'Expense']].concat(
        itemsWithTotalPrice.map(item => [item.name, item.budget, item.totalPrice])
    );
    const totalBudget = recipes.reduce((total, item) => total + item.budget, 0);

    // Calculate the total price from all the item.price values from ingredients in the data array
    const totalItemPrice = recipes.reduce(
      (total, item) => total + item.ingredients.reduce((subtotal, ingredient) => subtotal + parseFloat(ingredient.price), 0),
      0
    );
    const chartData2 = [['Category', 'Amount'], ['Total Budget', totalBudget], ['Total Item Price', totalItemPrice]];
    
    useEffect(()=>{
        api.get('/recipes').then((response)=>{
            setRecipes(response.data.filter(function(item){
                return item.owner === id
            }))
          })
    },[id])
    return (
        <div style={{width:"100%"}}>
    <Chart
      width={'90%'}
      height={'70vh'}
      chartType="BarChart"
      loader={<div><CustomLoader/>Loading Chart...</div>}
      data={chartData}
      options={{
        title: 'Budget vs Expense',
        colors: ['green', 'red'], // Green for budget, red for total ingredient price
        hAxis: { title: 'Amount (Ksh)' },
        vAxis: { title: 'Recipe/Meal' },
      }}
    />
     <Chart
      width={'600px'}
      height={'400px'}
      chartType="PieChart"
      data={chartData2}
      options={{
        title: 'Total Budget vs Total Expense',
        colors: ['green', 'red'],
         // Green for total budget, red for total item price
         is3D: true,
      }}
    />
        </div>
    );
}

export default Reports;