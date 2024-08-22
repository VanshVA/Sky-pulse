import "./footer.css"
export default function Footer(){
    return(
        <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sky Pulse. All rights reserved.</p>
        <p>Made with ♥ by Amaan Ullah</p>
      </div>
    </footer>
    )
}