class Solution(object):      
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        """
        num
        a variable starting at 10 to mod the num (0-9)
        subtract the result of the mod from num
        then multiply the variable by 10, and continue to mod until num <= 0
        6 if statements for the edge cases where a smaller numeral is before a larger one
        Otherwise, build the result from the mod using the numerals
        """
        numerals = {
            1: "I",
            5: "V",
            10: "X",
            50: "L",
            100: "C",
            500: "D",
            1000: "M"
        }
        mod = 10
        result = ""

        while num > 0:
            remainder = num % mod
            mod_divide_10 = mod / 10
            mod_divide_2 = mod /2
            if remainder == mod - mod_divide_10:
                result = numerals[mod_divide_10] + numerals[mod] + result
            elif remainder == mod_divide_2 - mod_divide_10:
                result = numerals[mod_divide_10] + numerals[mod_divide_2] + result
            else:
                currNumeral = ""
                if remainder >= mod_divide_2:
                    currNumeral = numerals[mod_divide_2]
                    remainder -= mod_divide_2
                currNumeral += numerals[mod_divide_10] * (remainder / mod_divide_10)
                result = currNumeral + result
            num -= num % mod
            mod *= 10
        return result