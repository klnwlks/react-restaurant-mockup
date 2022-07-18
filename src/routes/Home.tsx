import { useState, useEffect } from 'react'
import * as TopSeller from '../assets/topsellers.json'
import './Home.scss'
import './Home-m.scss'

interface Item {
    "imglink": String,
    "item": String,
    "price": String,
}

interface TopSellers {
    "data": Item[]
}

function App() {
    const [topSellers, setTopSellers] = useState<TopSellers>();

    useEffect(() => {
	setTopSellers(TopSeller)
    })

    useEffect(() => {
	const observer = new IntersectionObserver(entries => {
	    entries.forEach(entry => {
		const bestseller = entry.target.querySelector(".flex-wrap")

		if (entry.isIntersecting){
		    console.log("ping!")
		    bestseller?.classList.add("slide-up-anim")
		    return;
		}
	    })
	})

	observer.observe(document.querySelector(".bestseller"))
    }, [])

    return (
    <div id="home">
	<section className="intro">
	    <div className="noise-wrapper" />

	    <div className="intro-cont">
		<div className="intro-anim"> {/* why can't i do for loops in react without resorting to map */}
		    <div className="anim-sq"> <div className="anim-img" /> </div>
		    <div className="anim-sq"> <div className="anim-img" /> </div>
		    <div className="anim-sq"> <div className="anim-img" /> </div>
		</div>

		<div className="intro-text">
		    <h1> Fine Dining Refined. </h1>
		    <p>
		    Years of culinary craft dedicated to perfecting the delicate art of fine dining within our walls.
		    </p>
		</div>
	    </div>
	</section>

	<section className="about">
	    <div className="about-text">
		<h1>What We Do</h1>
		<p>
		<span>With Humble Beginnnings back to 19XX</span>, consectetur adipiscing elit. Proin sit amet interdum turpis, hendrerit tincidunt nunc. Morbi commodo libero eget metus sollicitudin bibendum. Phasellus aliquam tellus et nisi vestibulum venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam eu metus nisl.
		</p>

		<br />
		<br />

		<p>
		Suspendisse varius ornare magna sit amet varius. Vivamus nibh felis, ornare a est non, malesuada commodo ante. Phasellus suscipit velit nec magna aliquet, vitae sagittis ex porttitor. Donec ornare ipsum et lacus pellentesque finibus. Quisque at ultricies nibh. Proin sit amet orci efficitur, commodo velit eget, maximus augue. 
		</p>
	    </div>

	    <div className="about-img-wrapper"> {/* bruh */}
		<div className="about-img" />
	    </div>
	</section>

	<section className="bestseller">
	    <h1>Top Sellers</h1>
	    <div className="flex-wrap">
		{topSellers?.data.map((element: Item) => {
		    return <div key={element.item}>
			<img src={element.imglink as string} />

			<div className="text">
			    <h2>{element.item}</h2>
			    <h3>{element.price}</h3>
			</div>
		    </div>
		})}
	    </div>
	</section>

	<section className="reservations">
	    <div className="img-wrapper" />

	    <div className="reserve-text">
		<h1>Set Reservations</h1>
		<p>Call +// ///-////-/// for reservations</p>
		<p>Find us at address</p>
	    </div>
	</section>
    </div>
    )
}

export default App
