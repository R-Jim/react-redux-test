import React from 'react';

class Receipt extends React.Component {
    render() {
        console.log(this.props);
        const isOpen = this.props.isOpen;
        const formData = this.props.formData;
        if (!isOpen)
            return null;
        return (
            <div>
                <h1>Delivery Receipt</h1>
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>{formData.name}</td>
                    </tr>
                    <tr>
                        <td>Phone number:</td>
                        <td>{formData.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td>Card Number:</td>
                        <td>{formData.cardNo}</td>
                    </tr>
                    <tr>
                        <td>Card ID:</td>
                        <td>{formData.cid}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{formData.address}</td>
                    </tr>
                    <tr>
                        <td>Postcode:</td>
                        <td>{formData.postcode}</td>
                    </tr>
                </table>
                <button type="button">Back</button>
                <button type="button">Confirm</button>
            </div>
        );
    }
}

export default Receipt;