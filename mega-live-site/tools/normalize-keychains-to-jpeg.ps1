Add-Type -AssemblyName PresentationCore

$sourceDir = "C:\Users\Lenovo\Desktop\the crochet corner\the-crochet-corner\mega-live-site\images\keychains"
$outputDir = "C:\Users\Lenovo\Desktop\the crochet corner\the-crochet-corner\mega-live-site\images\keychains-jpg"

New-Item -ItemType Directory -Force $outputDir | Out-Null

Get-ChildItem $sourceDir -Filter *.png | Sort-Object Name | ForEach-Object {
  $sourcePath = $_.FullName
  $targetPath = Join-Path $outputDir ($_.BaseName + ".jpg")

  $uri = New-Object System.Uri($sourcePath)
  $frame = [System.Windows.Media.Imaging.BitmapFrame]::Create($uri)
  $encoder = New-Object System.Windows.Media.Imaging.JpegBitmapEncoder
  $encoder.QualityLevel = 88
  $encoder.Frames.Add($frame)

  $stream = [System.IO.File]::Create($targetPath)
  try {
    $encoder.Save($stream)
    Write-Output "$($_.Name) -> $([System.IO.Path]::GetFileName($targetPath))"
  } finally {
    $stream.Dispose()
  }
}
