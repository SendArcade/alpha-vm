const test = require('tap').test;
const Worker = require('tiny-worker');

const BlockType = require('../../src/extension-support/block-type');

const dispatch = require('../../src/dispatch/central-dispatch');
const VirtualMachine = require('../../src/virtual-machine');


// By default Central Dispatch works with the Worker class built into the browser. Tell it to use TinyWorker instead.
dispatch.workerClass = Worker;

class TestInternalExtension {
    constructor () {
        this.status = {};
        this.status.constructorCalled = true;
    }

    getInfo () {
        this.status.getInfoCalled = true;
        return {
            id: 'testInternalExtension',
            name: 'Test Internal Extension',
            blocks: [
                {
                    opcode: 'go'
                }
            ],
            menus: {
                simpleMenu: this._buildAMenu(),
                dynamicMenu: '_buildDynamicMenu'
            }
        };
    }

    go (args, util, blockInfo) {
        this.status.goCalled = true;
        return blockInfo;
    }

    _buildAMenu () {
        this.status.buildMenuCalled = true;
        return ['abcd', 'efgh', 'ijkl'];
    }

    _buildDynamicMenu () {
        this.status.buildDynamicMenuCalled = true;
        return [1, 2, 3, 4, 6];
    }
}

test('internal extension', t => {
    const vm = new VirtualMachine();

    const extension = new TestInternalExtension();
    t.ok(extension.status.constructorCalled);

    t.notOk(extension.status.getInfoCalled);
    vm.extensionManager._registerInternalExtension(extension);
    t.ok(extension.status.getInfoCalled);

    const func = vm.runtime.getOpcodeFunction('testInternalExtension_go');
    t.type(func, 'function');

    t.notOk(extension.status.goCalled);
    const goBlockInfo = func();
    t.ok(extension.status.goCalled);

    // The 'go' block returns its own blockInfo. Make sure it matches the expected info.
    // Note that the extension parser fills in missing fields so there are more fields here than in `getInfo`.
    const expectedBlockInfo = {
        arguments: {},
        blockAllThreads: false,
        blockType: BlockType.COMMAND,
        func: goBlockInfo.func, // Cheat since we don't have a good way to ensure we generate the same function
        opcode: 'go',
        terminal: false,
        text: 'go'
    };
    t.deepEqual(goBlockInfo, expectedBlockInfo);

    // There should be 2 menus - one is an array, one is the function to call.
    t.equal(vm.runtime._blockInfo[0].menus.length, 2);
    // First menu has 3 items.
    t.equal(
        vm.runtime._blockInfo[0].menus[0].json.args0[0].options.length, 3);
    // Second menu is a dynamic menu and therefore should be a function.
    t.type(
        vm.runtime._blockInfo[0].menus[1].json.args0[0].options, 'function');

    t.end();
});

test('load sync', t => {
    const vm = new VirtualMachine();
    vm.extensionManager.loadExtensionIdSync('solana');
    t.ok(vm.extensionManager.isExtensionLoaded('solana'));
    t.end();
});

test('load sync', t => {
    const vm = new VirtualMachine();
    vm.extensionManager.loadExtensionIdSync('jupiter');
    t.ok(vm.extensionManager.isExtensionLoaded('jupiter'));
    t.end();
});

test('load sync', t => {
    const vm = new VirtualMachine();
    vm.extensionManager.loadExtensionIdSync('send');
    t.ok(vm.extensionManager.isExtensionLoaded('send'));
    t.end();
});

test('load sync', t => {
    const vm = new VirtualMachine();
    vm.extensionManager.loadExtensionIdSync('pumpFun');
    t.ok(vm.extensionManager.isExtensionLoaded('pumpFun'));
    t.end();
});

// test('load sync', t => {
//     const vm = new VirtualMachine();
//     vm.extensionManager.loadExtensionIdSync('metaplex');
//     t.ok(vm.extensionManager.isExtensionLoaded('metaplex'));
//     t.end();
// });

test('load sync', t => {
    const vm = new VirtualMachine();
    vm.extensionManager.loadExtensionIdSync('helius');
    t.ok(vm.extensionManager.isExtensionLoaded('helius'));
    t.end();
});

test('load sync', t => {
    const vm = new VirtualMachine();
    vm.extensionManager.loadExtensionIdSync('coingecko');
    t.ok(vm.extensionManager.isExtensionLoaded('coingecko'));
    t.end();
});
