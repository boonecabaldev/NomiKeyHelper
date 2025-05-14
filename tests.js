// Test Scenario 1
function testScenario1() {
  const helper = new NomiKeyHelper();
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.focus(); // Ensure the input has focus
  
  // Helper function to format assertion messages
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
    console.log(`✓ ${message}`);
  }

  try {
    // Step 0
    assert(input.value === '' && helper.getHighlightState(input) === 'N', 'Step 0: Initial state is empty and not highlighted');

    // Step 1
    helper.simulateKeyPress(input, '(');
    assert(input.value === '() ' && helper.getHighlightState(input) === 'Y', 'Step 1: After "(" should be "() " and highlighted');

    // Step 2
    helper.simulateKeyPress(input, 'X');
    assert(input.value === '(X) ' && helper.getHighlightState(input) === 'Y', 'Step 2: After "X" should be "(X) " and highlighted');

    // Step 3
    helper.simulateEnter(input);
    assert(helper.getHighlightState(input) === 'N', 'Step 3: After Enter should not be highlighted');

    console.log('✅ Scenario 1 passed all tests');
  } catch (error) {
    console.error('❌ Scenario 1 failed:', error.message);
  } finally {
    document.body.removeChild(input);
  }
}

// Test Scenario 2
function testScenario2() {
  const helper = new NomiKeyHelper();
  const input = document.createElement('input');
  document.body.appendChild(input);
  input.focus(); // Ensure the input has focus
  
  function assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
    console.log(`✓ ${message}`);
  }

  try {
    // Step 0
    assert(input.value === '' && helper.getHighlightState(input) === 'N', 'Step 0: Initial state is empty and not highlighted');

    // Step 1
    helper.simulateKeyPress(input, '(');
    assert(input.value === '() ' && helper.getHighlightState(input) === 'Y', 'Step 1: After "(" should be "() " and highlighted');

    // Step 2
    helper.simulateDelete(input);
    assert(input.value === '(' && helper.getHighlightState(input) === 'N', 'Step 2: After Delete should be "(" and not highlighted');

    // Step 3
    helper.simulateKeyPress(input, ')');
    assert(input.value === '() ' && helper.getHighlightState(input) === 'Y', 'Step 3: After ")" should be "() " and highlighted');

    console.log('✅ Scenario 2 passed all tests');
  } catch (error) {
    console.error('❌ Scenario 2 failed:', error.message);
  } finally {
    document.body.removeChild(input);
  }
}

// Run tests
testScenario1();
testScenario2();