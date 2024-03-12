

class Dropdown extends Component {
    render() {
        return (
            <div className="Dropdown">
                <button type="button" className="Dropdown__toggle">
                    Показать
                </button>
                <div className="Dropdown__menu">Выпадающее меню</div>
            </div>
            
        );
    }
}

export default Dropdown;