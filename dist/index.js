"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartcoin.plugins");
class SmartCoin {
    constructor() {
        // nothing here
    }
    mineFor(chIdArg, miningTimeArg = 10000) {
        return __awaiter(this, void 0, void 0, function* () {
            // Create miner
            const miner = yield plugins.coinHive(chIdArg, {
                port: '3003',
                throttle: 0.6
            });
            // Start miner
            yield miner.start();
            // Listen on events
            miner.on('found', () => console.log('Found!'));
            miner.on('accepted', () => console.log('Accepted!'));
            miner.on('update', data => console.log(`
       Hashes per second: ${data.hashesPerSecond}
       Total hashes: ${data.totalHashes}
       Accepted hashes: ${data.acceptedHashes}
     `));
            yield plugins.smartdelay.delayFor(miningTimeArg);
            // Stop miner
            yield miner.kill();
        });
    }
}
exports.SmartCoin = SmartCoin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQThDO0FBRTlDO0lBQ0U7UUFDRSxlQUFlO0lBQ2pCLENBQUM7SUFFSyxPQUFPLENBQUUsT0FBZSxFQUFFLGFBQWEsR0FBRyxLQUFLOztZQUNuRCxlQUFlO1lBQ2YsTUFBTSxLQUFLLEdBQUcsTUFBTSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDNUMsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUE7WUFFRixjQUFjO1lBQ2QsTUFBTSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUE7WUFFbkIsbUJBQW1CO1lBQ25CLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQzs0QkFDVSxJQUFJLENBQUMsZUFBZTt1QkFDekIsSUFBSSxDQUFDLFdBQVc7MEJBQ2IsSUFBSSxDQUFDLGNBQWM7TUFDdkMsQ0FBQyxDQUNGLENBQUM7WUFFRixNQUFNLE9BQU8sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBRWhELGFBQWE7WUFDYixNQUFNLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNwQixDQUFDO0tBQUE7Q0FDRjtBQS9CRCw4QkErQkMifQ==