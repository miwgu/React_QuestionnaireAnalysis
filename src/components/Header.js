import PropType from 'prop-types'
const Header =({title})=>{

    return(
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps ={
    title: 'Survey: XXXXXX',
}

Header.prototypes={
    title: PropType.string.isRequired,
}
export default Header