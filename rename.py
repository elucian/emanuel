import os

def rename_jpegs(folder_path):
  """
  Renames all JPEG files in a folder with a sequential numbering scheme.

  Args:
    folder_path: The path to the folder containing the JPEG files.
  """
  # Get all files in the folder
  files = os.listdir(folder_path)

  # Filter for JPEG files
  jpeg_files = [f for f in files if f.lower().endswith(".jpeg")]

  # Count the number of JPEG files
  num_files = len(jpeg_files)

  # Rename each JPEG file with a sequential number
  for i, filename in enumerate(jpeg_files):
    new_filename = f"picture{i+1}.jpeg"
    os.rename(os.path.join(folder_path, filename), os.path.join(folder_path, new_filename))

  # Print confirmation message
  print(f"Successfully renamed {num_files} JPEG files in {folder_path}.")

# Example usage
folder_path = "./photo"  # Replace with your actual folder path
rename_jpegs(folder_path)
