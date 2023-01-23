import { Table, Tr, Td, TableContainer, Tbody } from "@chakra-ui/react";

function AccountsTable() {
  return (
    <TableContainer pb={{ base: "18%", md: "5%" }} w="-webkit-fit-content">
      <Table
        bg="gray.900"
        color="white"
        outlineColor="gray.900"
        variant="unstyled"
        maxWidth="-webkit-fit-content"
        justifySelf="center"
        size="sm"
      >
        <Tbody boxSize="9">
          <Tr>
            <Td pr={{ base: "0", md: "20" }}>Bank Name</Td>
            <Td pl="10">FNB Lesotho</Td>
          </Tr>
          <Tr>
            <Td>Account Name</Td>
            <Td pl="10">Africa Code Foundry PTY</Td>
          </Tr>
          <Tr>
            <Td>Account Type</Td>
            <Td pl="10">Business Current Account</Td>
          </Tr>
          <Tr>
            <Td>Account Number</Td>
            <Td pl="10">62938778761</Td>
          </Tr>
          <Tr>
            <Td>Branch Code</Td>
            <Td pl="10">280061</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default AccountsTable;
