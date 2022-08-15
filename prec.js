var mergeKLists = function (lists) {
  if (!lists?.length) return null;

  const q = new MinPriorityQueue();

  for (let i = 0; i < lists.length; i++) {
    if (lists[i]) {
      q.enqueue(lists[i], lists[i].val);
    }
  }

  const cap = new ListNode();
  let tail = cap;

  while (q.size()) {
    tail.next = q.dequeue().element;
    tail = tail.next;
    if (tail.next) {
      q.enqueue(tail.next, tail.next.val);
    }
  }

  return cap.next;
};
