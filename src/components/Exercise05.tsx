import React, { Component } from 'react'

export default class Exercise05 extends Component {
  state = {
    productCode: "",
    productName: "",
    price: "",
    quantity: 1
  };
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const product = {
      productCode: this.state.productCode,
      productName: this.state.productName,
      price: Number(this.state.price),
      quantity: Number(this.state.quantity)
    };
    console.log(product);
  };

  render() {
    return (
      <div style={{ width: "300px", margin: "20px auto", border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ textAlign: "center" }}>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Mã sản phẩm</label>
            <input
              type="text"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Tên sản phẩm</label>
            <input
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Giá</label>
            <input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div>
            <label>Số lượng</label>
            <input
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleChange}
              className="form-control"
              min="1"
            />
          </div>
          <button type="submit" style={{ marginTop: "10px", width: "100%", backgroundColor: "blue", color: "white", padding: "8px", border: "none", borderRadius: "4px" }}>
            Đăng ký
          </button>
        </form>
      </div>
    );
  }
}