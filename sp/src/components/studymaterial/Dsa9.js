import React from 'react'
import './Carrer2.css'; 
export default function Dsa9() {
  return (
    <div>
       <div class="box-container">
        <div class="hover">
            <h1 class="hover1">Common Mistakes to avoid in</h1>
            <h1 class="hover2">Competitive Programming </h1>
            <h1 class="hover3">for Beginners</h1>
        
            <img id="img" src="image/dsa9b.png" alt="software-engg"/>
        </div>
    </div>
    <br/><br/><br/>

    <div class="boxpara">
        <h1>Common Mistakes to Avoid in Competitive Programming for Beginners</h1>

<h2>1. Ignoring Problem Constraints:</h2>
<p>Beginners often overlook the constraints mentioned in problem statements, leading to inefficient or incorrect solutions.</p>

<h3>Example:</h3>
<p>Consider a problem where the input size can be up to 10<sup>5</sup>. Ignoring this constraint may result in a solution with a time complexity of O(N<sup>2</sup>), which may not meet the time limits.</p>

<h2>2. Not Handling Edge Cases:</h2>
<p>Failing to consider edge cases can lead to incorrect solutions or runtime errors.</p>

<h3>Example:</h3>
<pre><code># Incorrect code that doesn't handle edge cases
def divide(a, b):
    return a / b

# Example usage
print(divide(5, 0))  # Output: ZeroDivisionError
</code></pre>

<h2>3. Inefficient Algorithms and Data Structures:</h2>
<p>Using inefficient algorithms or data structures can result in solutions that exceed time or memory limits.</p>

<h3>Example:</h3>
<pre><code># Inefficient solution using linear search
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Example usage
arr = [1, 2, 3, 4, 5]
target = 5
print(linear_search(arr, target))  # Output: 4 (index of target element)
</code></pre>

<h2>4. Poor Time Management:</h2>
<p>Spending too much time on one problem can prevent you from attempting other problems in the contest.</p>

<h3>Example:</h3>
<p>Spending 90% of the contest time on one problem and rushing through the remaining problems in the last few minutes.</p>

<h2>5. Not Reading Problem Statements Carefully:</h2>
<p>Skipping or misinterpreting problem statements can lead to incorrect assumptions and solutions.</p>

<h3>Example:</h3>
<p>Assuming that input elements are always positive integers without verifying the problem statement, leading to incorrect solutions for negative inputs.</p>

<h2>Conclusion:</h2>
<p>By avoiding these common mistakes and practicing regularly, beginners can improve their competitive programming skills and become more proficient problem solvers over time.</p>


    </div>
    </div>
  )
}
