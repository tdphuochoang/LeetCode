var numUniqueEmails = function (emails) {
	let myArr = [];
	emails.forEach((email) => {
		let local = email.split("@")[0];
		let domain = email.split("@")[1];
		if (local.includes("+")) {
			local = local.substring(0, local.indexOf("+"));
		}
		while (local.includes(".")) {
			local = local.replace(".", "");
		}
		myArr.push(`${local}@${domain}`);
	});
	let mySet = [...new Set(myArr)];
	return mySet.length;
};
