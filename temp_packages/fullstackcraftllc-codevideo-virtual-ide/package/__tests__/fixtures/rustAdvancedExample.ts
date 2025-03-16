import { IAction } from "@fullstackcraftllc/codevideo-types";

export const advancedRustExampleActions: Array<IAction> = [
    {
        "name": "file-explorer-create-file",
        "value": "main.rs"
    },
    {
        "name": "file-explorer-open-file",
        "value": "main.rs"
    },
    {
        "name": "author-speak-before",
        "value": "Hi everyone! Today I wanted to make this video to showcase the powers of my codevideo framework with a much more complex example."
    },
    {
        "name": "author-speak-before",
        "value": "We'll be exploring an elegant solution in Rust that demonstrates the power of recursion combined with memoization."
    },
    {
        "name": "author-speak-before",
        "value": "This particular problem was from day 11 of 2024's Advent of Code - the challenge that came out on December 11th, 2024."
    },
    {
        "name": "author-speak-before",
        "value": "Let's start by looking at the problem. We need to simulate some strange stones that change every time we blink..."
    },
    {
        "name": "editor-type",
        "value": "// First, let's implement a naive solution for Part 1"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "fn execute_blink(stone_engravings: Vec<i64>) -> Vec<i64> {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let mut new_stones = Vec::new();"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    for stone in stone_engravings {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "The rules are pretty straightforward. For each stone, we need to check three conditions..."
    },
    {
        "name": "editor-type",
        "value": "        if stone == 0 {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            // Rule 1: stone = 0 -> replaced by stone marked 1"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            new_stones.push(1);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        } else {"
    },
    {
        "name": "author-speak-before",
        "value": "So here it's pretty straightforward, if the stone is engraved with 0 it becomes engraved with a 1"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            let stone_str = stone.to_string();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            let stone_len = stone_str.len();"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "            if stone_len % 2 == 0 {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                // Rule 2: split into two stones"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                let half = stone_len / 2;"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                let left_stone = stone_str[0..half].parse::<i64>().unwrap();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                let right_stone = stone_str[half..].parse::<i64>().unwrap();"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "                new_stones.push(left_stone);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                new_stones.push(right_stone);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "And for this else block, if a stone has an even number of digits, we split it in two where the \"left\" stone becomes the first half of the original stone, and the right stone becomes the \"right\" half of the original stone."
    },
    {
        "name": "editor-type",
        "value": "            } else {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                // Rule 3: multiply by 2024"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "                new_stones.push(stone * 2024);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            }"
    },
    {
        "name": "author-speak-before",
        "value": "And finally, if none of the other rules applied, we multiply the stone by 2024"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        }"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    }"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    new_stones"
    },
    {
        "name": "author-speak-before",
        "value": "And then of course we return the new stones."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "}"
    },
    {
        "name": "author-speak-before",
        "value": "This naive implementation works fine for Part 1, where we only need to blink 25 times. Lets set up a part 1 function and run it."
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "pub fn run_part_one() -> std::io::Result<()> {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let input = read_lines_as_int_arrays(\"src/day_11/input.txt\", \"\")?;"
    },
    {
        "name": "author-speak-before",
        "value": "We'll read in the single line puzzle input as an array."
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    let initial_stone_engravings: Vec<i64> = input[0].iter().map(|&x| x as i64).collect();"
    },
    {
        "name": "author-speak-before",
        "value": "Then convert that first array to a vec of 64 byte integers."
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    let mut stone_engravings = initial_stone_engravings.clone();"
    },
    {
        "name": "author-speak-before",
        "value": "We'll make a mutable clone of the initial stone engravings."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    for _ in 0..25 {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        stone_engravings = execute_blink(stone_engravings);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    }"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "And then we can execute the blink 25 times!"
    },
    {
        "name": "author-speak-before",
        "value": "We can then finally log out the solution."
    },
    {
        "name": "editor-type",
        "value": "    println!(\"Count of stones after 25 blinks: {}\", stone_engravings.len());"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    Ok(())"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "}"
    },
    {
        "name": "author-speak-before",
        "value": "Now, we could have just pasted in the puzzle input directly and converted to an array, but that's not so elegant, so let's go up to the top of the file and implement this read lines as int arrays function."
    },
    {
        "name": "editor-arrow-up",
        "value": "50"
    },
    {
        "name": "editor-arrow-left",
        "value": "1"
    },
    {
        "name": "editor-enter",
        "value": "3"
    },
    {
        "name": "editor-arrow-up",
        "value": "3"
    },
    {
        "name": "author-speak-before",
        "value": "We need to import from fs, io, and path libraries."
    },
    {
        "name": "editor-type",
        "value": "use std::fs::File;"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "use std::io::{self, BufRead, BufReader};"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "use std::path::Path;"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "author-speak-before",
        "value": "We'll start by importing the necessary modules. We need File for opening files, io utilities for buffered reading, and Path for handling file paths."
    },
    {
        "name": "editor-type",
        "value": "fn read_lines_as_int_arrays<P>(filename: P, sep: &str) -> io::Result<Vec<Vec<i32>>>"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "where"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    P: AsRef<Path>,"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "{"
    },
    {
        "name": "author-speak-before",
        "value": "Our function will be generic over any type P that can be referenced as a Path. This gives us flexibility in what types of path arguments we can accept."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let file = File::open(filename)?;"
    },
    {
        "name": "author-speak-before",
        "value": "We open the file using the question mark operator, which will return early with an error if the file can't be opened."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let reader = BufReader::new(file);"
    },
    {
        "name": "author-speak-before",
        "value": "We wrap the file in a BufReader for efficient reading. This gives us buffered reading capabilities which are much more efficient than reading one byte at a time."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let lines: Vec<Result<String, io::Error>> = reader.lines().collect();"
    },
    {
        "name": "author-speak-before",
        "value": "We collect all lines into a vector. Note that each line is actually a Result, since reading can fail at any point."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let mut int_arrays: Vec<Vec<i32>> = Vec::new();"
    },
    {
        "name": "author-speak-before",
        "value": "We'll create a vector to store our processed integer arrays."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    // split each line by the passed in sep and parse each element as an integer"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    for line in lines {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        let line: String = line?;"
    },
    {
        "name": "author-speak-before",
        "value": "For each line, we use the question mark operator to handle any potential reading errors."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        let int_array: Vec<i32> = line.split(sep).map(|x| x.parse::<i32>().unwrap()).collect();"
    },
    {
        "name": "author-speak-before",
        "value": "We split each line by the separator, then parse each piece into an integer. Note that we're using unwrap here, which means this function will panic if it encounters any non-integer values."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        int_arrays.push(int_array);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    }"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    Ok(int_arrays)"
    },
    {
        "name": "author-speak-before",
        "value": "Finally, we wrap our vector of integer arrays in Ok and return it."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "}"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "author-speak-before",
        "value": "We'll create a main function to call the run part one function."
    },
    {
        "name": "editor-type",
        "value": "fn main() {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    run_part_one();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "}"
    },
    {
        "name": "author-speak-before",
        "value": "And let's run this with cargo run:"
    },
    {
        "name": "mouse-click-terminal",
        "value": "1"
    },
    {
        "name": "terminal-type",
        "value": "cargo run"
    },
    {
        "name": "terminal-enter",
        "value": "1"
    },
    {
        "name": "mouse-click-editor",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "However, when we try to use this approach for Part 2, which requires 75 blinks, we run into quite a problem. The number of stones grows exponentially the more we blink, and even when I was running this on my own M3 Max Mac, the calculations becomes intractable after around 40 to 45 blinks."
    },
    {
        "name": "author-speak-before",
        "value": "It's time we implement a more elegant, optimized, and efficient solution using recursion and memoization."
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "author-speak-before",
        "value": "Let's get started by going to the top of the file and importing the HashMap package. We'll need this to keep track of our memoized stone engravings."
    },
    {
        "name": "editor-arrow-up",
        "value": "47"
    },
    {
        "name": "editor-command-left",
        "value": "1"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-arrow-up",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "use std::collections::HashMap;"
    },
    {
        "name": "editor-arrow-down",
        "value": "4"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-arrow-up",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "We can then define MemoKey and MemoMap types."
    },
    {
        "name": "editor-type",
        "value": "type MemoKey = (i64, usize);  // (stone_value, blinks_remaining)"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "type MemoMap = HashMap<MemoKey, usize>;"
    },
    {
        "name": "author-speak-before",
        "value": "The reason we can memoize according to blinks is because the resulting stone from any given stone will always be the same - you can take a given stone, whether it be 0, 1, 2, 3 or whatever - and you immediately know any other stone you see from that point on will have the same exact 'production' of further stones... so to speak."
    },
    {
        "name": "editor-arrow-down",
        "value": "100"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "So let's get started with the implementation."
    },
    {
        "name": "editor-type",
        "value": "fn count_stones_recursive(stone: i64, blinks: usize, memo: &mut MemoMap) -> usize {"
    },
    {
        "name": "author-speak-before",
        "value": "This new function will take the current stone engraving we are looking at, the number of blinks we are at, and the memoized map of stone engraving and blinks remaining."
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    if blinks == 0 { return 1; }"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    let key = (stone, blinks);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    if let Some(&count) = memo.get(&key) { return count; }"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    let result = if stone == 0 {"
    },
    {
        "name": "author-speak-before",
        "value": "This is where a major optimization gain is - if we've already seen this stone and blinks combo, we can immediately return the count that this number of blinks results in for this stone!"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        count_stones_recursive(1, blinks - 1, memo)"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    } else {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        let digit_count = stone.to_string().len();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        if digit_count % 2 == 0 {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            let stone_str = stone.to_string();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            let half = digit_count / 2;"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            let left = stone_str[..half].parse::<i64>().unwrap();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            let right = stone_str[half..].parse::<i64>().unwrap();"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "            count_stones_recursive(left, blinks - 1, memo) +"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            count_stones_recursive(right, blinks - 1, memo)"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        } else {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            count_stones_recursive(stone * 2024, blinks - 1, memo)"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        }"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    };"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    memo.insert(key, result);"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    result"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "}"
    },
    {
        "name": "author-speak-before",
        "value": "Now let's use this optimized solution to solve Part 2 of the challenge..."
    },
    {
        "name": "editor-arrow-up",
        "value": "28"
    },
    {
        "name": "author-speak-before",
        "value": "We'll comment out part one here..."
    },
    {
        "name": "editor-type",
        "value": "//"
    },
    {
        "name": "editor-command-right",
        "value": "1"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    run_part_two();"
    },
    {
        "name": "author-speak-before",
        "value": "And call run part two."
    },
    {
        "name": "editor-arrow-down",
        "value": "50"
    },
    {
        "name": "author-speak-before",
        "value": "And run part two looks like:"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "pub fn run_part_two() -> std::io::Result<()> {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let input = read_lines_as_int_arrays(\"src/day_11/input.txt\", \"\")?;"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    let initial_stones: Vec<i64> = input[0].iter().map(|&x| x as i64).collect();"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "    let blinks = 75;"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "author-speak-before",
        "value": "Here's where further elegance shines through. Instead of simulating each blink step by step, we're going to use our memoized recursive function to calculate the total stones efficiently. We can give our map function the desired number of blinks directly."
    },
    {
        "name": "editor-type",
        "value": "    let mut memo = HashMap::new();"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    let total: usize = initial_stones.iter()"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        .map(|&stone| {"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "            count_stones_recursive(stone, blinks, &mut memo)"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        })"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "        .sum();"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    println!(\"Total stones after {} blinks: {}\", blinks, total);"
    },
    {
        "name": "editor-enter",
        "value": "2"
    },
    {
        "name": "editor-type",
        "value": "    Ok(())"
    },
    {
        "name": "editor-enter",
        "value": "1"
    },
    {
        "name": "editor-type",
        "value": "}"
    },
    {
        "name": "author-speak-before",
        "value": "Now, let's run this optimized solution and see how it performs..."
    },
    {
        "name": "author-speak-before",
        "value": "And let's run this with cargo run:"
    },
    {
        "name": "mouse-click-terminal",
        "value": "1"
    },
    {
        "name": "terminal-type",
        "value": "cargo run"
    },
    {
        "name": "terminal-enter",
        "value": "1"
    },
    {
        "name": "author-speak-before",
        "value": "Even with 75 blinks, our memoized solution calculates the result almost instantly! The answer, or rather, the final count of stones, is over 218 trillion! Something that couldn't be done quickly on even the craziest of hardware if done via brute force and storing all the stones in an array like our naive approach in part 1. "
    },
    {
        "name": "author-speak-before",
        "value": "This puzzle is a perfect example of how some smart algorithmic choices can solve problems that would be completely intractable with a naive approach."
    },
    {
        "name": "author-speak-before",
        "value": "Let's quickly review why this solution is so much more efficient..."
    },
    {
        "name": "author-speak-before",
        "value": "Again, the naive solution would need to store and process an exponentially growing number of stones. With 75 blinks, we'd need to handle over 218 trillion stones in memory! You'd need some serious hardware to do that!"
    },
    {
        "name": "author-speak-before",
        "value": "But our memoized solution just needs to store the count for each unique combination of stone value and remaining blinks. This dramatically reduces both memory usage and computation time."
    },
    {
        "name": "author-speak-before",
        "value": "This optimization technique is particularly powerful because it takes advantage of the problem's structure - the fact that any given stone will always produce the same result after a certain number of blinks."
    },
    {
        "name": "author-speak-before",
        "value": "And that wraps up our exploration this elegant solution in Rust! Thanks for watching - I hope this helped demonstrate the power of careful algorithmic choices and how you can implement them in Rust."
    }
]