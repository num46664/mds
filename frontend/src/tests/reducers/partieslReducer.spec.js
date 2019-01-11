import partiesReducer from "@/reducers/partiesReducer";
import { storeParty, storeParties } from "@/actions/partyActions";

const baseExpectedValue = {
  parties: {},
  rawParties: {},
  partyIds: [],
  partyRelationships: [],
  partyRelationshipTypes: [],
};

// Creates deep copy of javascript object instead of setting a reference
const getBaseExpectedValue = () => JSON.parse(JSON.stringify(baseExpectedValue));

describe("partiesReducer", () => {
  it("receives undefined", () => {
    const expectedValue = getBaseExpectedValue();

    const result = partiesReducer(undefined, {});
    expect(result).toEqual(expectedValue);
  });

  it("receives STORE_PARTY", () => {
    const expectedValue = getBaseExpectedValue();
    expectedValue.parties = { test123: { party_guid: "test123" } };
    expectedValue.rawParties = [{ party_guid: "test123" }];
    expectedValue.partyIds = ["test123"];

    const result = partiesReducer(undefined, storeParty({ party_guid: "test123" }));
    expect(result).toEqual(expectedValue);
  });

  it("receives STORE_PARTY", () => {
    const expectedValue = getBaseExpectedValue();
    expectedValue.parties = {
      test123: { party_guid: "test123" },
      test456: { party_guid: "test456" },
    };
    expectedValue.rawParties = [{ party_guid: "test123" }, { party_guid: "test456" }];
    expectedValue.partyIds = ["test123", "test456"];

    const result = partiesReducer(
      undefined,
      storeParties({ parties: [{ party_guid: "test123" }, { party_guid: "test456" }] })
    );
    expect(result).toEqual(expectedValue);
  });
});
