import assert from "assert";
import { 
  TestHelpers,
  ERC1967Proxy_Approval
} from "generated";
const { MockDb, ERC1967Proxy } = TestHelpers;

describe("ERC1967Proxy contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for ERC1967Proxy contract Approval event
  const event = ERC1967Proxy.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("ERC1967Proxy_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await ERC1967Proxy.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualERC1967ProxyApproval = mockDbUpdated.entities.ERC1967Proxy_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedERC1967ProxyApproval: ERC1967Proxy_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      approved: event.params.approved,
      tokenId: event.params.tokenId,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualERC1967ProxyApproval, expectedERC1967ProxyApproval, "Actual ERC1967ProxyApproval should be the same as the expectedERC1967ProxyApproval");
  });
});
