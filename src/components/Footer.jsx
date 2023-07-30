import logo from '../assets/github.png'

const Footer = () => {

    return (
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: 8}}>
            <a href='/'>Really cool website's some link</a>
            
                <a href="https://github.com/Rbr4t/Shopping-Cart"><img src={logo} height={60} target='_blank'></img></a>
            
        </div>
    )
}

export default Footer;