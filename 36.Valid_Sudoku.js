/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	let compare = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

	for (let i = 0; i < board.length; i++) {
		let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (let j = 0; j < board[0].length; j++)
			if (compare.includes(board[i][j])) {
				let k = Number(board[i][j]);
				result[k]++;
				if (result[k] > 1)
					return false;
			}
	}

	for (let j = 0; j < board[0].length; j++) {
		let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		for (let i = 0; i < board.length; i++)
			if (compare.includes(board[i][j])) {
				let k = Number(board[i][j]);
				result[k]++;
				if (result[k] > 1)
					return false;
			}
	}

	for (let n = 0; n < 9; n += 3)
		for (let m = 0; m < 9; m += 3) {
			let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for (let i = 0; i < 3; i++)
				for (let j = 0; j < 3; j++)
					if (compare.includes(board[n + i][m + j])) {
						let k = Number(board[n + i][m + j]);
						result[k]++;
						if (result[k] > 1)
							return false;
					}
		}

	return true;
};


let board = [
		["5","3",".",".","7",".",".",".","."],
		["6",".",".","1","9","5",".",".","."],
		[".","9","8",".",".",".",".","6","."],
		["8",".",".",".","6",".",".",".","3"],
		["4",".",".","8",".","3",".",".","1"],
		["7",".",".",".","2",".",".",".","6"],
		[".","6",".",".",".",".","2","8","."],
		[".",".",".","4","1","9",".",".","5"],
		[".",".",".",".","8",".",".","7","9"]
	    ];

console.log(isValidSudoku(board));
