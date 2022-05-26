import  '../styles/Banner.css'
import logo from '../logo.svg'
import CareScale from '../components/CareScale ';
function Banner() {
    const title="La maison jungle";
    const currentMonth=new Date().getMonth();
    const isSpring=String(currentMonth>=2&&currentMonth<=5)

    return  (
    <div className="lmj-banner">
    <div  className="lmj-banner-row"> 
     <img src={logo} alt='La maison jungle' className='lmj-logo' />
    <h1 className="lmj-banner-title">{  title}</h1>
    </div>
    <CareScale name="bouha"/>
  {isSpring?(<div>c'est le printemps</div>):(<div>non</div>)}
    </div>)
}

export default Banner