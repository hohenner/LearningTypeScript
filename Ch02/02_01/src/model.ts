let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425;

interface inventoryItem {
    displayName: string;
    inventoryType: string;
    trackingNumber: string;
    createDate: Date;
    originalCost: number;
}

function getInventoryItem(trackingNumber: string) : inventoryItem  {
    return null;
}

function saveInventoryItem(item: inventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);