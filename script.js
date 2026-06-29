// complete the given function

function palindrome(str){

	let string  = str.toLowerCase()
	let left = 0
	let right = string.length-1

	while(left < right){

		if(string[left] !== string[right] ){
			return false
		}
		left++
		right--
	}
	return true

}
module.exports = palindrome
