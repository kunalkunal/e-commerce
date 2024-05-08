import React from 'react'
const category = ({ trackAction }) => {
    const handleCategory=(selected)=>{
        try{
            trackAction(selected)
        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
          <ul className="nav nav-pills nav-justified">
              <li className="nav-item" onClick={() => handleCategory('mobile')}>
                  <img src="https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057890/products/mobile/zf7sofsshuqki03godny.webp" height={'50px'} alt="" />
                  <a className="nav-link" aria-current="page">mobile</a>
              </li>
              <li className="nav-item" onClick={() => handleCategory('tv')}>
                  <img src="https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058411/products/tv/pngb93qbahqr8rtrxkkc.webp" height={'50px'} alt="" />
                  <a className="nav-link">tv</a>
              </li>
              <li className="nav-item" onClick={() => handleCategory('refrigrator')}>
                  <img src="https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058140/products/refrigerator/z3pafa908opjlqo4xhyr.webp" height={'50px'} alt="" />
                  <a className="nav-link">Refrigerator</a>
              </li>
              <li className="nav-item" onClick={() => handleCategory('mouse')}>
                  <img src="https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057956/products/mouse/xh64qkq4jhryvwcggsdr.webp" height={'50px'} alt="" />
                  <a className="nav-link">Mouse</a>
              </li>
              <li className="nav-item" onClick={() => handleCategory('speaker')}>
                  <img src="https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058252/products/speeker/gamvp4c2cmpfq5ahofs2.webp" height={'50px'} alt="" />
                  <a className="nav-link">Speaker</a>
              </li>
              <li className="nav-item" onClick={() => handleCategory('camera')}>
                  <img src="https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057702/products/camera/sehmtwgyfw0vogeipbju.jpg" height={'50px'} alt="" />
                  <a className="nav-link">Camera</a>
              </li>
          </ul>
      
    </>
  )
}

export default category
