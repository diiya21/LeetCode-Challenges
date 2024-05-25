function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let j = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1;
}

const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1));

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2));
