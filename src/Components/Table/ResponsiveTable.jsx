import Table from 'react-bootstrap/Table';

function ResponsiveTable() {
  return (
    <Table responsive>
    <thead>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Transaction Type</th>
        <th>Account</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01/01/2024</td>
        <td>Payment for services</td>
        <td>₦10,000 NGN</td>
        <td>₦0 NGN</td>
        <td>Deposit</td>
        <td>1234567890</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>02/01/2024</td>
        <td>Withdrawal</td>
        <td>₦0 NGN</td>
        <td>₦5,000 NGN</td>
        <td>Withdrawal</td>
        <td>1234567890</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>03/01/2024</td>
        <td>Transfer to savings</td>
        <td>₦2,000 NGN</td>
        <td>₦0 NGN</td>
        <td>Transfer</td>
        <td>1234567890</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </Table>

  );
}

export default ResponsiveTable;