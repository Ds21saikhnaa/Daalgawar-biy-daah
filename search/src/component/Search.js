const Search = () => {
    return(
        <div>
            <form>
        <input
          type="text"
          placeholder="Search..."
        //   value={this.props.filterText}
        //   onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            // checked={this.props.inStockOnly}
            // onChange={this.handleInStockChange}
          />
          {' '}
          Only show products in stock
        </p>
      </form>

        </div>
    )
}
export default Search