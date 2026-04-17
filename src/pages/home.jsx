import devicon from '../assets/dev_icon.svg'

const Home = () => {
    return (
        <div className='home-page'

            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '90vh' }}
        >
            <img src={devicon} alt="devicon" />
            <h1>Home Page</h1>
        </div>
    )
}

export default Home;