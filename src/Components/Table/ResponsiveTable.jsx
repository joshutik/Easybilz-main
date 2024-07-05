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
        <td>xxxxxxxx xxxxxxxx</td>
        <td>₦xx,xxx</td>
        <td>₦xxxxxxxx</td>
        <td>xxxxxxxx</td>
        <td>123xxxxxxxx0</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>02/01/2024</td>
        <td>xxxxxxxx</td>
        <td>₦xxxxxxxx</td>
        <td>₦xx,xxxxxx</td>
        <td>xxxxxxxx</td>
        <td>123xxxxxxxx0</td>
        <td>Completed</td>
      </tr>
      <tr>
        <td>03/01/2024</td>
        <td>xxxxxxxx</td>
        <td>₦xxxxxxxx</td>
        <td>₦xxxxxxxx</td>
        <td>xxxxxxxx</td>
        <td>123xxxxxxxx0</td>
        <td>Pending</td>
      </tr>
    </tbody>
  </Table>

  );
}

export default ResponsiveTable;