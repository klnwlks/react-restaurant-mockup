// import axios from 'axios'
import { useState, useEffect } from 'react'
import * as menuJSON from '../assets/menu.json'
import './Menu.scss'
import './Menu-m.scss'

interface menuItem {
    "imglink": String,
    "item": String,
    "price": String,
    "desc": String,
    "desc2": String
}

interface menu {
    "data": menuItem[]
}

export default function Menu(){
    const [menu, setMenu] = useState<menu>()
    const [current, setCurrent] = useState<menuItem>()

    useEffect(() => {
	/*
	axios.get("url").then((data: menu) => {
	    setMenu(data);
	})
	*/

	setMenu(menuJSON)
    })

    return (
    <div id="menu">
	<div className="menu-grid">
	{ menu?.data.map((element: menuItem) => {
	    return <div className="grid-item" 
			key={element.item} 
			onClick={() => setCurrent(element)}>
		<img src={element.imglink as string} />

		<div className="grid-text">
		    <h2>{element.item}</h2>
		    <h3>{element.price}</h3>
		</div>
	    </div>
	})}
	</div>
	<div className="menu-desc">
	    {!current ? 
	    <h1> No selected item. </h1>
	    :
	    <div className="item">
		<img src={current?.imglink as string} />

		<div className="item-text">
		    <h2>{current?.item}</h2>
		    <h3>{current?.price}</h3>
		    <p>{current?.desc}</p>
		</div>
	    </div>
	    }
	</div>
    </div>
   )
}
