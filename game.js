class MiningGame {
    constructor() {
        // Initialize starting values.
        this.money = 0;
        this.totalMined = 0;
        this.currentLayer = 1;
        this.grid = [];
        this.inventory = {};

        // Define resources. You can add new resources.
        this.resources = {
            coal: {
                name: "Coal",
                value: 3,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><path fill="#000" d="M12 2L8 8L12 14L16 8L12 2M6 10L2 16L6 22L10 16L6 10M18 10L14 16L18 22L22 16L18 10Z"/></svg>',
            },
            iron: {
                name: "Iron",
                value: 5,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><rect fill="#95a5a6" x="4" y="6" width="16" height="12" rx="2"/></svg>',
            },
            copper: {
                name: "Copper",
                value: 10,
                color: '2c3e50',
            },
            gold: {
                name: "Gold",
                value: 20,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><rect fill="#f1c40f" x="4" y="6" width="16" height="12" rx="2"/></svg>',
            },
            gems: {
                name: "Gems",
                value: 50,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><path fill="#9b59b6" d="M6 2L2 8L12 22L22 8L18 2H6M12 4L8.5 8L12 18L15.5 8L12 4Z"/></svg>',
            },
            fossil: {
                name: "Fossil",
                value: 999,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><ellipse fill="#d4c5a1" cx="5" cy="12" rx="3" ry="2.5"/><rect fill="#d4c5a1" x="6" y="10.5" width="12" height="3" rx="1"/><ellipse fill="#d4c5a1" cx="19" cy="12" rx="3" ry="2.5"/><circle fill="#c7b798" cx="4" cy="11" r="1"/><circle fill="#c7b798" cx="5" cy="13.5" r="0.8"/><circle fill="#c7b798" cx="19" cy="11" r="1"/><circle fill="#c7b798" cx="20" cy="13.5" r="0.8"/></svg>',                    },
            deep_geode: {
                name: "Deep Geode",
                value: 20000,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><ellipse fill="#3E2711" cx="12" cy="12" rx="10" ry="8"/><ellipse fill="#D5D3D7" cx="12" cy="12" rx="8" ry="6"/><ellipse fill="#87ceeb" cx="12" cy="12" rx="7" ry="5"/><ellipse fill="#3498db" cx="12" cy="12" rx="6" ry="4"/><ellipse fill="#1048AB" cx="12" cy="12" rx="4" ry="2"/></svg>',
            },
            dark_iron: {
                name: "Dark Iron",
                value: 77777,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><rect fill="#14292e" x="4" y="6" width="16" height="12" rx="2"/></svg>',
            },
            diamonds: {
                name: "Diamonds",
                value: 50000,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><path fill="#B9F2FF" d="M6 2L2 8L12 22L22 8L18 2H6M12 4L8.5 8L12 18L15.5 8L12 4Z"/></svg>',
            },
            lapis: {
                name: "lapis",
                value: 5000,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24"><rect fill="#1e3a8a" x="4" y="6" width="16" height="12" rx="2"/><path fill="#6b7280" d="M4 8 Q8 10 12 9 T20 11 L20 13 Q16 12 12 13 T4 11 Z"/><path fill="#3b82f6" d="M6 10 Q10 8 14 10 T18 9 L18 15 Q14 13 10 15 T6 14 Z"/><circle fill="#fbbf24" cx="8" cy="9" r="0.4"/><circle fill="#fbbf24" cx="15" cy="12" r="0.3"/><circle fill="#fbbf24" cx="11" cy="15" r="0.3"/></svg>',
            },
            ancient_copper: {
                name: "Ancient Copper",
                value: 7000,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n' +
                    '  <!-- Copper block -->\n' +
                    '  <rect fill="#c68346" x="4" y="6" width="16" height="12" rx="2"/>\n' +
                    '\n' +
                    '  <!-- Left stone band (irregular polygons) -->\n' +
                    '  <path d="M7 6 h2 v12 h-2 Z" fill="#7d6f63"/>\n' +
                    '  <path d="M7 6 l2 2 v2 l-2 1 Z\n' +
                    '           M7 11 l2 1 v2 l-2 2 Z\n' +
                    '           M7 16 l2 1 v1 l-2 0.5 Z"\n' +
                    '        fill="#5c5149"/>\n' +
                    '\n' +
                    '  <!-- Right stone band (irregular polygons) -->\n' +
                    '  <path d="M15 6 h2 v12 h-2 Z" fill="#7d6f63"/>\n' +
                    '  <path d="M15 6 l2 1.5 v2 l-2 1 Z\n' +
                    '           M15 11 l2 1.2 v2 l-2 1.5 Z\n' +
                    '           M15 16 l2 1 v1 l-2 0.5 Z"\n' +
                    '        fill="#5c5149"/>\n' +
                    '</svg>'
            },
            tigers_eye: {
                name: "Tigers Eye",
                value: 100000,
                color: '2c3e50',
                svg: '<svg class="resource-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n' +
                    '  <defs>\n' +
                    '    <!-- Clip path so everything stays inside the oval -->\n' +
                    '    <clipPath id="tigersEyeClip">\n' +
                    '      <ellipse cx="12" cy="12" rx="8" ry="6"/>\n' +
                    '    </clipPath>\n' +
                    '  </defs>\n' +
                    '\n' +
                    '  <!-- Base oval -->\n' +
                    '  <ellipse cx="12" cy="12" rx="8" ry="6" fill="#9c6b3c"/>\n' +
                    '\n' +
                    '  <!-- Stripes + highlight (all clipped) -->\n' +
                    '  <g clip-path="url(#tigersEyeClip)">\n' +
                    '    <!-- Golden wavy bands -->\n' +
                    '    <path d="M4 9 C8 8.5, 16 10, 20 9.5 v1.5 H4 Z" fill="#cfa15b" opacity="0.85"/>\n' +
                    '    <path d="M4 13 C9 12.3, 15 14, 20 13.2 v2 H4 Z" fill="#d9a947" opacity="0.8"/>\n' +
                    '\n' +
                    '    <!-- Darker irregular bands -->\n' +
                    '    <path d="M4 11 C7 10.8, 17 12, 20 11.4 v1 H4 Z" fill="#5a3a20" opacity="0.65"/>\n' +
                    '    <path d="M4 15 C10 14.6, 14 15.5, 20 15 v1 H4 Z" fill="#4a2f18" opacity="0.7"/>\n' +
                    '\n' +
                    '    <!-- Softer mid-tones -->\n' +
                    '    <path d="M4 10.2 C8 10, 16 11, 20 10.6 v0.6 H4 Z" fill="#b17a44" opacity="0.5"/>\n' +
                    '    <path d="M4 14 C9 13.7, 15 14.8, 20 14.3 v0.7 H4 Z" fill="#a56d38" opacity="0.5"/>\n' +
                    '\n' +
                    '    <!-- Highlight (soft shine) -->\n' +
                    '    <ellipse cx="9" cy="10" rx="3" ry="1.2" fill="white" opacity="0.25"/>\n' +
                    '  </g>\n' +
                    '</svg>\n'
            },
            copper_glazed_pot_shard: {
                name: "copper glazed pot shard",
                value:500000,


            }
        }

        Object.keys(this.resources).forEach((resourceType) => {
            this.inventory[resourceType] = 0;
        });

        // Define layers. You can add new layers.
        this.layers = {
            1: {
                layerName: "Surface",
                unlockCost: 0,
                unminedColor: "#8b7355",
                layerResources: {
                    coal: 0.4,
                    iron: 0.2,
                    gold: 0.05,
                    gems: 0.01,
                    fossil: 0.001,

                }
            },
            2: {
                layerName: "Underground",
                unlockCost: 100,
                unminedColor: "#7f6a4c",
                layerResources: {
                    coal: 0.3,
                    iron: 0.3,
                    gold: 0.15,
                    gems: 0.05,
                    fossil: 0.005,
                }
            },
            3: {
                layerName: "Deep Caverns",
                unlockCost: 500,
                unminedColor: "#6b5d42",
                layerResources: {
                    coal: 0.2,
                    iron: 0.25,
                    gold: 0.25,
                    gems: 0.15,
                    fossil: 0.01,
                    copper: 0.20,

                }
            },
            4: {
                layerName: "Abyss",
                unlockCost: 2000,
                unminedColor: "#584631",
                layerResources: {
                    coal: 0.1,
                    iron: 0.15,
                    gold: 0.25,
                    gems: 0.45,
                    fossil: 0.01,
                    copper: 0.5,
                }
            },
            5: {
                layerName: "Deep Dark",
                unlockCost: 10000,
                unminedColor: "#473725",
                layerResources: {
                    iron: 0.1,
                    gold: 0.3,
                    gems: 0.5,
                    fossil: 0.02,
                    deep_geode: 0.015,
                }
            },
            6: {
                layerName: "Dark Caverns",
                unlockCost: 100000,
                unminedColor: "#362819",
                layerResources: {
                    gold: 0.30,
                    gems: 0.40,
                    fossil: 0.1,
                    deep_geode: 0.04,
                    dark_iron: 0.015
                }
            },
            7: {
                layerName: "the unknown caverns",
                unlockCost: 500000,
                unminedColor: "#000",
                layerResources: {
                    gold: 0.10,
                    gems: 0.30,
                    fossil: 0.02,
                    deep_geode: 0.07,
                    dark_iron: 0.05,
                    diamonds: 0.07,
                    lapis: 0.30,
                }
            },
            8: {
                layerName: "The Buried Sands",
                unlockCost: 1200000,
                unminedColor: "#c2b280",
                layerResources: {
                    gems: 0.1,
                    deep_geode: 0.1,
                    dark_iron: 0.07,
                    diamonds: 0.1,
                    lapis: 0.10,
                    tigers_eye: 0.02,
                    ancient_copper: 0.2,
                    copper_glazed_pot_shard: 0.01,
                },
            }
        }

        // Try to load saved game, otherwise initialize new game
        if (!this.loadGame()) {
            this.initializeGame();
        } else {
            // If loaded successfully, just update UI and setup listeners
            this.renderGrid();
            this.renderInventory();
            this.setupEventListeners();
        }
        this.updateUI();
    }

    initializeGame() {
        this.generateGrid();
        this.renderGrid();
        this.renderInventory();
        this.setupEventListeners();
    }

    generateGrid() {
        this.grid = [];
        for (let i = 0; i < 100; i++) { // 10x10 grid
            this.grid.push({
                mined: false,
                resource: null
            });
        }
    }

    renderGrid() {
        const gridElement = document.getElementById('miningGrid');
        gridElement.innerHTML = '';

        this.grid.forEach((tile, index) => {
            const tileElement = document.createElement('div');
            tileElement.className = `tile ${tile.mined ? 'mined' : 'unmined'}`;
            tileElement.dataset.index = index;

            if (tile.mined && tile.resource) {
                const resourceData = this.resources[tile.resource];
                tileElement.style.backgroundColor = resourceData.color;
                tileElement.innerHTML = resourceData.svg;
            } else if (!tile.mined) {
                // Set the unmined tile color based on current layer
                tileElement.style.backgroundColor = this.layers[this.currentLayer].unminedColor;
            }

            gridElement.appendChild(tileElement);
        });
    }

    setupEventListeners() {
        document.getElementById('miningGrid').addEventListener('click', (e) => {
            let target = e.target;
            // If we clicked on an SVG or path inside a tile, find the parent tile
            while (target && !target.classList.contains('tile')) {
                target = target.parentElement;
            }

            if (target && target.classList.contains('tile') && !target.classList.contains('mined')) {
                this.mineTile(parseInt(target.dataset.index));
            }
        });

        document.getElementById('unlockBtn').addEventListener('click', () => {
            this.unlockNextLayer();
        });
    }

    mineTile(index) {
        const tile = this.grid[index];
        if (tile.mined) return;

        tile.mined = true;
        this.totalMined++;

        // Determine what resource was found
        const layerResources = this.layers[this.currentLayer].layerResources; //Changed!
        const rand = Math.random();
        let cumulativeChance = 0;

        //Changed!
        for (const [resourceType, chance] of Object.entries(layerResources)) {
            cumulativeChance += chance;
            if (rand <= cumulativeChance) {
                tile.resource = resourceType;
                this.inventory[resourceType]++;
                break;
            }
        }

        this.renderGrid();
        this.renderInventory();
        this.updateUI();
        this.checkForNewGrid();
        this.saveGame();

    }

    checkForNewGrid() {
        const minedCount = this.grid.filter(tile => tile.mined).length;
        if (minedCount >= 100) {
            // All tiles mined, generate new grid
            setTimeout(() => {
                this.generateGrid();
                this.renderGrid();
            }, 1000);
        }
    }

    renderInventory() {
        const inventoryElement = document.getElementById('inventory');
        inventoryElement.innerHTML = '';

        Object.entries(this.inventory).forEach(([resource, count]) => {
            const resourceData = this.resources[resource];
            const itemElement = document.createElement('div');
            itemElement.className = 'inventory-item';

            if (count > 0) {
                // Show normal inventory item
                itemElement.innerHTML = `
                            <div>${resourceData.svg}</div>
                            <div>${resourceData.name}</div>
                            <div>${count}</div>
                            <div>$${resourceData.value} each</div>
                            <button class="sell-btn" onclick="game.sellResource('${resource}')">
                                Sell All ($${count * resourceData.value})
                            </button>
                        `;
            } else {
                // Show placeholder for undiscovered resource
                itemElement.innerHTML = `
                            <div style="opacity: 0.3;">
                                <svg class="resource-icon" viewBox="0 0 24 24">
                                    <rect fill="#666" x="6" y="6" width="12" height="12" rx="2"/>
                                    <text x="12" y="14" text-anchor="middle" fill="#fff" font-size="8">?</text>
                                </svg>
                            </div>
                            <div style="opacity: 0.5;">Unknown</div>
                            <div style="opacity: 0.5;">0</div>
                            <div style="opacity: 0.5;">???</div>
                            <button class="sell-btn" disabled>Undiscovered</button>
                        `;
                itemElement.style.opacity = '0.6';
            }

            inventoryElement.appendChild(itemElement);
        });
    }

    sellResource(resourceType) {
        const count = this.inventory[resourceType];
        if (count === 0) return;

        const value = this.resources[resourceType].value; //Changed!
        const totalValue = count * value;

        this.money += totalValue;
        this.inventory[resourceType] = 0;

        this.renderInventory();
        this.updateUI();
        this.saveGame();

    }

    unlockNextLayer() {
        const nextLayer = this.currentLayer + 1;
        const cost = this.layers[nextLayer].unlockCost; //Changed!
        const maxLayer = Object.keys(this.layers).length

        //Changed!
        if (this.money >= cost && nextLayer <= maxLayer) {
            this.money -= cost;
            this.currentLayer = nextLayer;
            this.generateGrid();
            this.renderGrid();
            this.renderInventory();
            this.updateUI();
            this.saveGame();

        }
    }

    updateUI() {
        document.getElementById('money').textContent = `$${this.money}`;
        document.getElementById('totalMined').textContent = this.totalMined;
        document.getElementById('layerInfo').textContent = `Layer ${this.currentLayer} - ${this.layers[this.currentLayer].layerName}`; //Changed!

        const unlockBtn = document.getElementById('unlockBtn');
        const progressInfo = document.getElementById('progressInfo');
        const maxLayer = Object.keys(this.layers).length

        //Changed! hardcoded layer cap
        if (this.currentLayer < maxLayer) {
            const nextLayer = this.currentLayer + 1;
            const cost = this.layers[nextLayer].unlockCost; //Changed!
            unlockBtn.textContent = `Unlock ${this.layers[nextLayer].layerName} ($${cost})`; //Changed!
            unlockBtn.disabled = this.money < cost;
            progressInfo.textContent = `Earn $${cost} to unlock ${this.layers[nextLayer].layerName} with better resources!`; //Changed!
        } else {
            unlockBtn.style.display = 'none';
            progressInfo.textContent = 'You have unlocked all layers! Keep mining for maximum profit!';
        }
    }

    saveGame() {
        const gameState = {
            money: this.money,
            totalMined: this.totalMined,
            currentLayer: this.currentLayer,
            inventory: this.inventory,
            grid: this.grid
        };
        localStorage.setItem('miningGameSave', JSON.stringify(gameState));
    }

    loadGame() {
        const savedGame = localStorage.getItem('miningGameSave');
        if (savedGame) {
            const gameState = JSON.parse(savedGame);
            this.money = gameState.money || 0;
            this.totalMined = gameState.totalMined || 0;
            this.currentLayer = gameState.currentLayer || 1;
            this.inventory = gameState.inventory || {};
            this.grid = gameState.grid || [];

            // Ensure all resource types exist in inventory
            Object.keys(this.resources).forEach((resourceType) => {
                if (this.inventory[resourceType] === undefined) {
                    this.inventory[resourceType] = 0;
                }
            });

            return true; // Successfully loaded
        }
        return false; // No save found
    }

    resetGame() {
        if (confirm('Are you sure you want to reset your game? This cannot be undone.')) {
            localStorage.removeItem('miningGameSave');
            location.reload();
        }
    }
}

// Start the game
const game = new MiningGame();