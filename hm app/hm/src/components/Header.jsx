import React from 'react'
import {FaHeart, FaUser, FaCartPlus, FaSearch} from 'react-icons/fa'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'

function Header() {
  return (
   <>
        <span style={{backgroundColor:'#balck',fontSize:'15px',height: '100px',padding: '10px',display:'flex',flex:'wrap', justifyContent:'left',marginLeft:'30px', gap: '20px',fontFamily:'HM Sans Regular,HMSansHebrew-Regular,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,Osaka,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif',}}>
          <span style={{marginTop:'3%'}}> Customer Service</span>
          <span style={{marginTop:'3%'}}> Newsletter</span>
          <span style={{marginTop:'3%'}}>Find a store </span>
          <span style={{marginTop:'3.3%',fontSize:'10px'}}><b>ooo</b> </span>
          <img style={{width: '60px', height: '40px',marginLeft:'15%',marginTop:'3%'}}  src="https://assets.stickpng.com/images/585990604f6ae202fedf28d3.png" alt=''/>
      


          <span style={{marginTop:'3%', marginLeft:'20%'}}>  <FaUser style={{marginRight:'3px'}} className= 'icon user'/> sign in </span>
          <span style={{marginTop:'3%'}}><FaHeart style={{}} className= 'icon heart'/>favourites</span>
          <span style={{marginTop:'3%'}} ><FaCartPlus style={{}} className= 'icon cartplus'/> shopping bag (0) </span>
          </span>


          <span  style={{fontSize:'15px',height: '100px',padding: '10px',display:'flex',flex:'wrap', justifyContent:'center',marginLeft:'20%', gap: '20px',fontFamily:'HM Sans Regular,HMSansHebrew-Regular,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,Osaka,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif',}}>
          <span style={{marginTop:'2%'}}> Ladies</span>
          <span style={{marginTop:'2%'}}> Men</span>
          <span style={{marginTop:'2%'}}> Divided</span>
          <span style={{marginTop:'2%'}}> Baby</span>
          <span style={{marginTop:'2%'}}> Kids</span>
          <span style={{marginTop:'2%'}}> H&M Home</span>
          <span style={{marginTop:'2%'}}> Sports </span>
          <span style={{marginTop:'2%'}}> Sustainability</span>
          <span style={{marginTop:'2%'}}> Sale</span>
         <div style={{marginTop:'1%',marginLeft:'11%'}}><FaSearch style={{marginRight:'2px'}} className= 'icon search'/>
      <input type="text" id="textInput" name="name" style={{height:'20px',border:'none',borderBottomColor: '2px black'}}  placeholder='Search Products here....'/>
          </div>
           </span>
           <span  style={{fontSize:'15px',height: '100px',padding: '10px',display:'flex',flex:'wrap', justifyContent:'space-evenly',margin:'5%',marginTop:'-3%', gap: '20px',fontFamily:'HM Sans Regular,HMSansHebrew-Regular,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,Osaka,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif',}}>
          <span > Members get free shipping above Rs.1999</span>
          <span > Free and Flexible 15 days return</span>
          <span> Download the H&M App</span>
          </span>
        <img style={{width:'80%',marginTop:'-7%'}} src={image1} alt=''/>
         <div style={{textAlign:'start',fontSize:'20px',marginTop:'2%',marginLeft:'9.85%',letterSpacing:'1px'}}><strong>Popular categories</strong></div>
         <div>
         <img style={{marginTop:'3%',width:'15%',marginRight:'1%'}}  src="https://lp2.hm.com/hmgoepprod?set=source[/2e/0d/2e0dee6416e32b9ddb5e34b77b38c156e15d14af.jpg],origin[dam],category[ladies_jacketscoats_jackets],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" alt=''/>
         <img style={{marginTop:'3%',width:'15%',marginRight:'1%'}}  src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff1%2Fc5%2Ff1c5ec2ee630e52e4a6e08f9e95ac7b504f2cf80.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_hoodiessweatshirts_sweatshirts%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt=''/>
         <img style={{marginTop:'3%',width:'15%',marginRight:'1%'}}  src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F14%2F6f%2F146f31cd152f40bedfaa5b20e7e40f158eddc828.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]" alt=''/>
         <img style={{marginTop:'3%',width:'15%',marginRight:'1%'}}  src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fda%2F99%2Fda9968a175fa668c605ae8e0926d809c7c2995b3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" alt=''/>
         <img style={{marginTop:'3%',width:'15%',marginRight:'1%'}}  src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F21%2F17213612c6d75ebfb69ce84c0fe7bb20a3d67c06.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" alt=''/>
         </div>


          <div style={{display:'flex',fontSize:'30px',marginTop:'-2%',}}>
          <h6 style={{marginLeft:'10%'}}>Ladies Clothing </h6>
          <h6 style={{marginLeft:'8%'}}>ON SALE</h6>
          <h6 style={{marginLeft:'8%'}}>MEN Clothing</h6>
          <h6 style={{marginLeft:'6%'}}>New Arrivals</h6>
          <h6 style={{marginLeft:'6%'}}>Best Sellers</h6>
          </div>
          <img style={{width:'80%'}} src={image3} alt=''/>
          <img style={{width:'80%'}} src={image2} alt=''/>

          <div style={{fontSize:'20px',marginTop:'2%',marginLeft:'9.85%',letterSpacing:'1px',display:'flex'}}><strong>NEW ARRIVALS</strong><br/></div>
         <div style={{fontSize:'17px',fontFamily:'HM Sans Semi Bold,HMSansHebrew-SemiBold,ヒラギノ角ゴ Pro W3,Hiragino Kaku Gothic Pro,Osaka,メイリオ,Meiryo,ＭＳ Ｐゴシック,MS PGothic,sans-serif',marginTop:'2%',marginLeft:'9.85%',letterSpacing:'0.5px',display:'flex',justifyContent:'space-evenly',marginRight:'40%',padding:'2px'}}>
          
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}}><b>Ladies</b></div>
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}}><b>men</b></div>
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}} ><b>Divided</b></div>
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}}><b>Baby</b></div>
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}}><b>Kids</b></div>
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}}><b>H&M Home</b></div>
         <div style={{border:'1px solid black',borderRadius:'100px',padding:'5px 10px'}}><b>Sports</b></div>
         </div>


         <div style={{justifyContent:'center',marginTop:'20px',display:'flex'}}>
          <div>
         <img style={{width:'80%'}} src='https://lp2.hm.com/hmgoepprod?set=source[/b1/0e/b10e04a8d44a1ce10687685987dc55ea21475ee5.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'/>
         <div>Rib-knit mermaid Skirt</div>
         <div>Rs.2,299.00</div>
         
         </div>
         <div>
         <img style={{width:'80%'}} src='https://lp2.hm.com/hmgoepprod?set=source[/83/3c/833c11b3f60a06ee08a4a35039506c92a5a58bcd.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'/>
         <div>Rib-knit mermaid Skirt</div>
         <div>Rs.2,299.00</div>
         </div>
         <div>
         <img style={{width:'80%'}} src='https://lp2.hm.com/hmgoepprod?set=source[/44/72/4472d72d1481abe363dd5bb7ad88941271ee49c8.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'/>
         <div>Rib-knit mermaid Skirt</div>
         <div>Rs.2,299.00</div>
         </div>
         <div>
         <img style={{width:'80%'}} src='https://lp2.hm.com/hmgoepprod?set=source[/4a/e2/4ae2677655a7288be3ce7ce01611f7bcec2b9ef2.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]'/>
         <div>Rib-knit mermaid Skirt</div>
         <div>Rs.2,299.00</div>
        </div>
        </div>






  </>  
  );
}

export default Header;