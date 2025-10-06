function Menu_Section() {
    return (
        <section id="menu" className="menu-section">
            <h2>Our Menu</h2>
            <div className="menu-items">    
                <div className="menu-item">
                    <h3>Margherita Pizza</h3>
                    <p>Classic pizza with fresh tomatoes, mozzarella, and basil.</p>
                    <span className="price">$12.99</span>
                </div>
                <div className="menu-item">
                    <h3>Caesar Salad</h3>
                    <p>Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.</p>
                    <span className="price">$8.99</span>
                </div>
                <div className="menu-item">
                    <h3>Grilled Salmon</h3>
                    <p>Fresh salmon fillet grilled to perfection, served with seasonal vegetables.</p>
                    <span className="price">$18.99</span>   
                </div>
            </div>
        </section>
    );
}   
export default Menu_Section;    