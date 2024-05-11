function reverseString(originalText :string) :void {
    const reverseText :string = originalText.split('').reverse().join('');
    console.log(reverseText);
}
reverseString("Hello");