import '../assets/section.css';

export const Section = ({ children }) => {
    return (
        <div className="section">
            <div className='Cart'>
                {children}
            </div>
        </div>
    )
}
