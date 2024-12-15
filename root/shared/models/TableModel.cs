namespace Shared.Models
{
    public class TableModel
    {
        public Table<Header> Headers { get; set; } // List of column definitions
        public Table<Row> Rows { get; set; }       // List of rows

        public class Header
        {
            public string Key { get; set; }   // Unique column identifier
            public string Label { get; set; } // Display name for the column
        }

        public class Row
        {
            public Dictionary<string, object> Data { get; set; } // Key-value pairs for row data
        }
    }
}