import { Component } from "react";

import "./App.scss";
import AppHeader from "./components/header/header";
import SearchPanel from "./components/search-panel/search-panel";
import ListHeader from "./components/list-header/list-header";
import ListOfItems from "./components/list-of-items/list-of-items";
import Footer from "./footer/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Мыло",
          units: "Шт",
          minQuantity: 5,
          actualQuantity: 10,
          id: 0,
        },
        {
          name: "Стиральный порошок",
          units: "Кг",
          minQuantity: 5,
          actualQuantity: 8,
          id: 1,
        },
        {
          name: "Кондиционер",
          units: "Л",
          minQuantity: 5,
          actualQuantity: 2,
          id: 2,
        },
        {
          name: "Бумажные салфетки",
          units: "Шт",
          minQuantity: 7,
          actualQuantity: 3,
          id: 3,
        },
        {
          name: "Отбеливатель",
          units: "Л",
          minQuantity: 2,
          actualQuantity: 1,
          id: 4,
        },
        {
          name: "Бумажные полотенца",
          units: "Шт",
          minQuantity: 4,
          actualQuantity: 8,
          id: 5,
        },
        {
          name: "Мусорные пакеты",
          units: "Шт",
          minQuantity: 8,
          actualQuantity: 6,
          id: 6,
        },
        {
          name: "Доместос",
          units: "Л",
          minQuantity: 3,
          actualQuantity: 1,
          id: 7,
        },
      ],
      report: '',
      itemSearch : '',
    };
  }

  decreaseItem  = (id) => {

    this.setState(({data}) => {
      return {
        data: data.map(item => 
          {if (item.id === id  && item.actualQuantity > 0) {
            return {...item, actualQuantity: item.actualQuantity - 1}
          }
          return item; 
        })
      }
    })
  }

  increaseItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.map(item => {
          if(item.id === id) {
            return {...item, actualQuantity: item.actualQuantity + 1}
          }
          return item
        })
      }
    })
  }

  prepareReport = () => {

    
    const {data} = this.state;
   
    const output = data
      .filter(item => item.actualQuantity < item.minQuantity)
      .map( item => {const strOutput = `${item.name} ${item.minQuantity - item.actualQuantity} ${item.units}`; return strOutput})
      .map((item, i) => {return <p key={i}>{item}</p>})
      
    this.setState(({report}) => {
      return {
        data: data,
        report: output
      }
    })
  } 

  onUpdateSearch = (itemSearch) => {
    this.setState({itemSearch})
  }

  handleSearch(items, itemSearch) {
    if (itemSearch.lenght === 0) {return items}
    
    return items.filter( item => { return item.name.toLowerCase().indexOf(itemSearch) > - 1})
  }


  render() {
    const {data, report, itemSearch} = this.state;

    const visibleData = this.handleSearch(data, itemSearch);
    

    return (
      <div className="container">
        <AppHeader />
        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        <ListHeader />
        <ListOfItems data={visibleData} onDecrease={this.decreaseItem} onIncrease={this.increaseItem}/>
        <Footer onPrepareReport={this.prepareReport} reportOutput={report}/>
      </div>
    );
  }
}

export default App;
