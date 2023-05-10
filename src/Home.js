import React from 'react'
import './Home.css'
import Product from "./Product"
import Header from './Header' 

function Home() {
  return (

    <div className='Home'>
        
        
        <div className='home-container'>

            <img
            className='home-img'
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" />
            <div className='home-row'>
                <Product
                 id="34782634"
                 title='The lean startup' 
                 price={29.99} 
                 image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
                 rating={5}/>
                <Product 
                 id="1 2345678"
                 title="Kenwood kMix Stand Mixer for baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 litre glass bowl"
                 price={239.0}
                 rating={4}
                 image="https://5.imimg.com/data5/SELLER/Default/2020/8/TS/AN/YG/2432564/kenwood-stand-mixer-9899332022-india-500x500.jpg"
                />
                {/*Product*/}
            </div>
            <div className='home-row'>
                <Product 
                id="69584736"
                title="realme Smart Watch S with 3.30 cm (1.3 inch)"
                price={199.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/614SBqXrTES._SL1500_.jpg"
                />
                <Product 
                 id="53455671"
                 title="Amazon Echo (3rd Gen) | Smart Speaker with Alexa, Charcoal Fabric"
                 price={98.99}
                 rating={5}
                 image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?300x400_retinamobilex2$"
                />
                <Product 
                id="38475637"
                title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Gen)"
                price={598.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                
            </div>
            <div className='home-row'>
                <Product 
                 id="34344565"
                 title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                 price={1094.98}
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX655_.jpg"
                />
            </div>
        </div>
        
    </div>
 
  )
}

export default Home